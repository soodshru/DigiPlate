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
	// Insert four rows into the "accounts" table.
	log.Println("Creating new rows...")
	if _, err := tx.Exec(ctx,
		"INSERT INTO accounts (id, driverPlate1, insuranceNo1, driverPlate2, insuranceNo2, locationX, locationY) VALUES ($1, $2, $3, $4, $5, $6, $7), ($8, $9, $10, $11, $12, $13, $14), ($15, $16, $17, $18, $19, $20, $21)", accts[0], "HTN 2021", 250, "UTM 1969", 300, -89, -50, accts[1], "HTV 1234", 100, "UOT 1123", 400, 112, -69, accts[2], "UTH 7890", 150, "UWO 8888", 200, 90, 180); err != nil {
		return err
	}
	return nil
}

func printBalances(conn *pgx.Conn) error {
	rows, err := conn.Query(context.Background(), "SELECT * FROM accounts")
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

func deleteRows(ctx context.Context, tx pgx.Tx, one uuid.UUID, two uuid.UUID) error {
	// Delete two rows into the "accounts" table.
	log.Printf("Deleting rows with IDs %s and %s...", one, two)
	if _, err := tx.Exec(ctx,
		"DELETE FROM accounts WHERE id IN ($1, $2)", one, two); err != nil {
		return err
	}
	return nil
}

func main() {
	// Read in connection string
	scanner := bufio.NewScanner(os.Stdin)
	log.Println("Enter a connection string: ")
	scanner.Scan()
	connstring := os.ExpandEnv(scanner.Text())

	// Connect to the "bank" database
	config, err := pgx.ParseConfig(connstring)
	config.Database = "bank"
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
	if err == nil {
		log.Println("New rows created.")
	} else {
		log.Fatal("error: ", err)
	}

	// Print out the balances
	log.Println("Initial balances:")
	printBalances(conn)

	// Delete rows
	err = crdbpgx.ExecuteTx(context.Background(), conn, pgx.TxOptions{}, func(tx pgx.Tx) error {
		return deleteRows(context.Background(), tx, accounts[0], accounts[1])
	})
	if err == nil {
		log.Println("Rows deleted.")
	} else {
		log.Fatal("error: ", err)
	}

	// Print out the balances
	log.Println("Balances after deletion:")
	printBalances(conn)
}
