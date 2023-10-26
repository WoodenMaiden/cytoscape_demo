import CytoscapeComponent from 'react-cytoscapejs';
import cytoscape, { ElementDefinition } from 'cytoscape';
import './App.css';
import data from './data.json';
import { stylesheet } from './cy-stylesheet';

function App() {
  const elements = [
    ...data.types.map<ElementDefinition>((type) => {
      return {
        group: 'nodes',
        data: {
          id: type,
        },
      };
    }),
    ...data.attacks.filter(a => a.efficiency !== 1).map<ElementDefinition>((attack) => {
      return {
        group: 'edges',
        data: {
          id: `${attack.attacker}->${attack.defender}`,
          source: attack.attacker,
          target: attack.defender,
          efficiency: attack.efficiency,
        },
      };
    }),
  ];

  return (
    <div className="App">
      <header>
        <h1>An awesome pokemon visualisation tool</h1>
      </header>

      <CytoscapeComponent
        className='cy'
        elements={elements}
        style={{ minWidth: '100%', minHeight: '100%', padding: 0 }}
        layout={{ name: 'circle' }}
        stylesheet={stylesheet}
        cy={(cy: cytoscape.Core) => {
          cy.on("mouseover", "node", (event) => {
            const node = event.target;
            const connectedEdges = node.connectedEdges();
            const directNeighbors = node.neighborhood();

            // https://js.cytoscape.org/#eles.symmetricDifference
            // Here we hide all edges that are not connected to the node

            cy.edges()['(-)'](connectedEdges).forEach((edge: any) => {
              edge.style('line-opacity', 0.01);
            })
            
            cy.nodes()['(-)'](directNeighbors).forEach((n: any) => {
              n.style('opacity', 0.01);
            })

            connectedEdges.forEach((e: any) => {
              e.style('line-opacity', 1);
            });

            directNeighbors.forEach((n: any) => {
              n.style('opacity', 1);
            })

            node.style('opacity', 1);

          });

          cy.on("mouseout", "node", (_) => {
            cy.$("").forEach((elt: any) => {
              elt.style('line-opacity', 0.5);
              elt.style('opacity', 1);
            })
          });
        }}
      />
    </div>
  );
}

export default App;
