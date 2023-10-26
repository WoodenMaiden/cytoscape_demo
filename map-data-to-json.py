#!/bin/python3
import json
import csv

# Open the CSV
with open('data/Pokemon-Type-Chart.csv', 'r', newline="\r\n") as file:
    reader = csv.DictReader(file)
    types = reader.fieldnames[1:]
    reader.fieldnames = [ "AttackingType" if h == "" else h for h in reader.fieldnames]

    json_object = { "types": types, "attacks": [] }

    for row in reader:
        attacker = row["AttackingType"]
        for defender in types:
            json_object["attacks"].append({ 
                "attacker": attacker, 
                "defender": defender, 
                "efficiency": float(row[defender]) 
            })

    open("src/data.json", "w").write(json.dumps(json_object, indent=1))