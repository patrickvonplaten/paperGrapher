const isBrowser = typeof window !== 'undefined';
const Sigma = isBrowser ? require('react-sigma') : undefined;
const { parsePapersToGraph } = require('../utils/paperObjectToGraphParser');

export default class GraphSurface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      papers: this.props.papers
    };
  }

  render() {
    console.log("Papers", this.state.papers)
    const myGraph = parsePapersToGraph(this.state.papers);

    return (
        isBrowser ? (
        <div>
          <div> SearchObject </div>
          <Sigma.Sigma graph={myGraph} settings={{ drawEdges: true, clone: false }}>
            <Sigma.RelativeSize initialSize={15} />
            <Sigma.RandomizeNodePositions />
          </Sigma.Sigma>
        </div>
      ) : null
    );
  }
}