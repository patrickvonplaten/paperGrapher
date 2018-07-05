import Search from './Search'
import GraphSurface from './GraphSurface'

const paper1 = {
  id: "1806.02988",
  title: "The physical material",
  author: "Peter the great",
  link: 'https://arxiv.org/pdf/1806.02988.pdf',
  childrenPapers:[
    '1609.08144',
    '1606.02960'
  ]
}

const paper2 = {
  id: "1609.08144",
  title: "The chemical material",
  author: "Peter the great",
  link: 'https://arxiv.org/pdf/1609.08144.pdf',
  childrenPapers:[
    '1606.02960'
  ]
}

const paper3 = {
  id: "1606.02960",
  title: "The biological material",
  author: "Peter the great",
  link: 'https://arxiv.org/pdf/1606.02960.pdf',
  childrenPapers:[
  ]
}

const papers = [paper1, paper2, paper3]


export default class GrapherTool extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> 
        <Search/>
        <GraphSurface
          papers={papers}
        />
      </div>
    );
  }
}