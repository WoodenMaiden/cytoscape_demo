import CytoscapeComponent from 'react-cytoscapejs';
import { ElementDefinition } from 'cytoscape';
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
    ...data.attacks.map<ElementDefinition>((attack) => {
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
      />
    </div>
  );
}

export default App;
