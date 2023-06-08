process.stdin.write("Gasté un total de: \n")

process.stdin.on("data", function(expenses){
    process.stdout.write("Gasté un total de: " + expenses)
    process.stdout.write("Mis gastos fueron: \n")
    process.stdin.on("data", function(viewExpenses){
        process.stdout.write("Mis gastos fueron: " + viewExpenses)
        process.exit()
    })
})