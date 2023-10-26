## Reminder about the dataset

The [data.json](./src/data.json) file contains a list of all attack interactions between two types of Pokemon. each entry has the following structure:

```ts
{
    "type": string[], // contains all pokemon types
    "attacks": [ // attacks between two types
        {
            "attacker": string, // Type of attacking pokemon
            "defender": string, // Type of defending pokemon
            "efficiency": 0 | 0.5 | 1 | 2 // Efficiency of the attack on the defender
            // 0: no effect
            // 0.5: not very effective
            // 1: normal
            // 2: super effective 
        }
    ]
}
```

[Link to CytoscapeJS documentation](https://js.cytoscape.org/)

## Tasks
- [ ] Create a cytoscape instance
- [ ] Read data from the data.json file and transform it into a graph where: 
    - [ ] Each node is a type of pokemon and has the type name as id
    - [ ] Each edge is an attack between two types of pokemon, meaning that it is directed from the attacker to the defender
- [ ] We can't see anything as everything is stacked: create a stylesheet object and apply a loadout to the graph
- [ ] Add style to the edges so we can see the directions of edges (tip: set the `curve-style` to `bezier` in addition of your changes)
- [ ] Add style to the nodes so the label property is displayed and equal to the type of pokemon (tip: you can use cytoscape's core object methods in the stylesheet, like `data(x)` and many others)
- [ ] Set the background image of the nodes to the corresponding pokemon type image
    - If on JS vanilla, you should follow the [conditions to use the `background-image` property](https://js.cytoscape.org/#style/background-image)
    - On React just import the images as a variable
- [ ] In order to have a better view on what is going on apply a color to the edges depending on the efficiency of the attack.
- [ ] Remove the edges with an efficiency of 1. 
- [ ] Add an event when hovering a type, it should only show types and edges connected to him and hide the others
- [ ] Add an event when not hovering a type anymore,undoing the previous event 

- [ ] **BONUS**: Add a button to take a snap of the snap and save it on your computer
