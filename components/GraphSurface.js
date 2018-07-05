const isBrowser = typeof window !== 'undefined';
const Sigma = isBrowser ? require('react-sigma') : undefined;


export default class GraphSurface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: this.props.searchResult
    };
  }

  const 



  render() {
    console.log("SearchObject", this.state.searchResult)

    let myGraph = { nodes: [{ id: "n1", label: "Alice" }, 
                            { id: "n2", label: "Rabbit" }],
                    edges: [{ id: "e1", source: "n1", target: "n2", label: "SEES" }] };


    return (
        isBrowser ? (
        <div>
          <div> SearchObject </div>
          <Sigma.Sigma graph={myGraph} settings={{ drawEdges: true, clone: false }}>
            <Sigma.RelativeSize initialSize={15} />
            <Sigma.RandomizeNodePositions />
          </Sigma.Sigma>
          <div> {this.state.searchResult.title} </div>
        </div>
      ) : null
    );
  }
}