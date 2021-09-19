package main

import (
	"bufio"
	"context"
	"log"
	"os"

	"github.com/cockroachdb/cockroach-go/v2/crdb/crdbpgx"
	"github.com/google/uuid"
	"github.com/jackc/pgx/v4"
)

func insertRows(ctx context.Context, tx pgx.Tx, accts [3]uuid.UUID) error {
	// Initialising database
	if _, err := tx.Exec(ctx,
		"INSERT INTO info (id, driverPlate1, insuranceNo1, driverPlate2, insuranceNo2, locationX, locationY) VALUES ($1, $2, $3, $4, $5, $6, $7), ($8, $9, $10, $11, $12, $13, $14), ($15, $16, $17, $18, $19, $20, $21)", accts[0], "HTN-2021", 250, "UTM-1969", 300, -89, -50, accts[1], "HTV-1234", 100, "UOT-1123", 400, 112, -69, accts[2], "UTH-7890", 150, "UWO-8888", 200, 90, 180); err != nil {
		return err
	}
	return nil
}

func insertRows2(ctx context.Context, tx pgx.Tx, accts [1]uuid.UUID) error {
        // Insert row into the "info" table.
        log.Println("Adding new row...")
        if _, err := tx.Exec(ctx,
                "INSERT INTO info (id, driverPlate1, insuranceNo1, driverPlate2, insuranceNo2, locationX, locationY) VALUES ($1, $2, $3, $4, $5, $6, $7)", accts[0], "ABC-9999", 101, "DEF-2222", 450, 121, -42); err != nil {
                return err
        }
        return nil
}

func printBalances(conn *pgx.Conn) error {
	rows, err := conn.Query(context.Background(), "SELECT * FROM info")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()
	for rows.Next() {
		var id uuid.UUID
		var plate1 string
		var insuranceNo1 int
		var plate2 string
		var insuranceNo2 int
		var locationX int
		var locationY int
		if err := rows.Scan(&id, &plate1, &insuranceNo1, &plate2, &insuranceNo2, &locationX, &locationY); err != nil {
			log.Fatal(err)
		}
		log.Printf("%s: %s %d %s %d %d %d\n", id, plate1, insuranceNo1, plate2, insuranceNo2, locationX, locationY)
	}
	return nil
}

func main() {
	// Read in connection string
	scanner := bufio.NewScanner(os.Stdin)
	log.Println("Enter a connection string: ")
	scanner.Scan()
	connstring := os.ExpandEnv(scanner.Text())

	// Connect to the "crash" database
	config, err := pgx.ParseConfig(connstring)
	config.Database = "crash"
	if err != nil {
		log.Fatal("error configuring the database: ", err)
	}
	conn, err := pgx.ConnectConfig(context.Background(), config)
	if err != nil {
		log.Fatal("error connecting to the database: ", err)
	}
	defer conn.Close(context.Background())

	// Insert initial rows
	var accounts [3]uuid.UUID
	for i := 0; i < len(accounts); i++ {
		accounts[i] = uuid.New()
	}

	err = crdbpgx.ExecuteTx(context.Background(), conn, pgx.TxOptions{}, func(tx pgx.Tx) error {
		return insertRows(context.Background(), tx, accounts)
	})
	if err != nil {
		log.Fatal("error: ", err)
	}

	// Print out the balances
	log.Println("Initial list:")
	printBalances(conn)

	var accounts2 [1]uuid.UUID
	accounts2[0] = uuid.New()

	err = crdbpgx.ExecuteTx(context.Background(), conn, pgx.TxOptions{}, func(tx pgx.Tx) error {
                return insertRows2(context.Background(), tx, accounts2)
        })
	if err == nil {
                log.Println("New rows created.")
        } else {
                log.Fatal("error: ", err)
        }

	// Print out the balances
	log.Println("Final list:")
	printBalances(conn)
}
