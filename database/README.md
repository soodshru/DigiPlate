# Accident Info Database that interfaces with blockchain network
This code implements a database that can interface with the blockchain network using a Go and Cockroach DB. The Ethereum smart contract is implemented in Solidify.

# How to run
Make sure you have a recent version of Go installed (I used 1.17.1) and substitute `<connection_string>` with your Cockroach DB connection string

```
cat dbinit.sql | cockroach sql --url "<connection_string>"
go mod init basic-sample && go mod tidy
go run main.go
```
