import { Stylesheet } from "cytoscape"
import bug from './icons/bug.png'
import dark from './icons/dark.png'
import dragon from './icons/dragon.png'
import electric from './icons/electric.png'
import fairy from './icons/fairy.png'
import fight from './icons/fight.png'
import fire from './icons/fire.png'
import flight from './icons/flight.png'
import ghost from './icons/ghost.png'
import grass from './icons/grass.png'
import ground from './icons/ground.png'
import ice from './icons/ice.png'
import normal from './icons/normal.png'
import poison from './icons/poison.png'
import psychic from './icons/psychic.png'
import rock from './icons/rock.png'
import steel from './icons/steel.png'
import water from './icons/water.png'

export const stylesheet: Stylesheet[] = [
    {
        "selector": "edge",
        "style": {
            "line-opacity": .5,
            "curve-style": "bezier",
            "target-arrow-shape": "vee",
            "line-color": "#ccc"
        }
    },
    {
        "selector": "node",
        "style": {
            "width": 64,
            "height": 64,
            "label": "data(id)",
            "background-fit": "contain",

        }
    },
    // to apply bg picture to node
    {
        "selector": "#Bug",
        "style": {
            "background-image": bug,
        }
    },
    {
        "selector": "#Dark",
        "style": {
            "background-image": dark,
        }
    },
    {
        "selector": "#Dragon",
        "style": {
            "background-image": dragon,
        }
    },
    {
        "selector": "#Electric",
        "style": {
            "background-image": electric,
        }
    },
    {
        "selector": "#Fairy",
        "style": {
            "background-image": fairy,
        }
    },
    {
        "selector": "#Fighting",
        "style": {
            "background-image": fight,
        }
    },
    {
        "selector": "#Fire",
        "style": {
            "background-image": fire,
        }
    },
    {
        "selector": "#Flying",
        "style": {
            "background-image": flight,
        }
    },
    {
        "selector": "#Ghost",
        "style": {
            "background-image": ghost,
        }
    },
    {
        "selector": "#Grass",
        "style": {
            "background-image": grass,
        }
    },
    {
        "selector": "#Ground",
        "style": {
            "background-image": ground,
        }
    },
    {
        "selector": "#Ice",
        "style": {
            "background-image": ice,
        }
    },
    {
        "selector": "#Normal",
        "style": {
            "background-image": normal,
        }
    },
    {
        "selector": "#Poison",
        "style": {
            "background-image": poison,
        }
    },
    {
        "selector": "#Psychic",
        "style": {
            "background-image": psychic,
        }
    },
    {
        "selector": "#Rock",
        "style": {
            "background-image": rock,
        }
    },
    {
        "selector": "#Steel",
        "style": {
            "background-image": steel,
        }
    },
    {
        "selector": "#Water",
        "style": {
            "background-image": water,
        }
    },
]