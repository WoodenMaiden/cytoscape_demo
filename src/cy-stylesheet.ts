import { Stylesheet } from "cytoscape"

export const stylesheet: Stylesheet[] = [
    {
        "selector": "edges",
        "style": {
            "line-opacity": .5,
            "curve-style": "bezier",
            "target-arrow-shape": "vee",
            "line-color": "#ccc"
        }
    }
]