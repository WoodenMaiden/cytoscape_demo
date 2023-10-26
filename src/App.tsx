import CytoscapeComponent from 'react-cytoscapejs';
import { ElementDefinition } from 'cytoscape';
import './App.css';
import data from './data.json';

function App() {
  const elements = [
    ...data.types.map<ElementDefinition>((type) => {
      return {
        group: 'nodes',
        data: {
          id: type,
          label: type,
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
          label: attack.efficiency.toString(),
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
      />
    </div>
  );
}

export default App;
