const isBrowser = typeof window !== 'undefined';
const Sigma = isBrowser ? require('react-sigma') : undefined;


export default class GraphSurface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      papers: this.props.papers
    };
  }

  fromArrayToGraphdictionary(papers) {
    var nodes = [];

    var edges = [];
    var edge_counter = 0;

    var i;
    for (i = 0; i < papers.length; i++) {
      var current_id = papers[i]["id"];
      nodes[i] = {id: current_id, label: papers[i]["title"]};
      console.log(nodes[i]);

      var j;
      for (j = 0; j < papers[i]["childrenPapers"].length; j++) {
        var child_id = papers[i]["childrenPapers"][j];
        var id_label = current_id + "-" + child_id;

        edges[edge_counter++] = {id: edge_counter, source: current_id, target:child_id, label: id_label};
      }
    }

    const graph = {nodes: nodes, edges: edges}    
    return graph;
  }

  render() {
    console.log("Papers", this.state.papers)

    let paper1 = this.state.papers[1];
    let myGraph = this.fromArrayToGraphdictionary(this.state.papers);

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