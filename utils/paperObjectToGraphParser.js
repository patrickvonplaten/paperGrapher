
const parsePapersToGraph = (papers) => {
  var nodes = [];
  var edges = [];

  papers.forEach((paper) => {
    var id = paper['id'];
    var label = paper['title'];
    var childrenPaperIds = paper['childrenPapers'];

    nodes.push({
      id: id,
      label: label
    });

    childrenPaperIds.forEach((childPaperId) => {
      var childPaperIdLabel = id + '-' + childPaperId;

      edges.push({
        id: edges.length + 1,
        source: id,
        target: childPaperId,
        label: childPaperIdLabel
      });
    });
  });

  const graph = {
    nodes:  nodes,
    edges:  edges
  } 
}

module.exports = {
  parsePapersToGraph: parsePapersToGraph,
}