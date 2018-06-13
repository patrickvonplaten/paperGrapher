import Search from './Search'
import GraphSurface from './GraphSurface'

const searchResult = {
  id: "1806.02988",
  title: "The physical material the human body is comprised of",
  author: "Peter the great",
  abstract: `The physical material in the human body is crazy.
              Within minutes, it can take the shape of multiple species.
              Peter the great was great enough to find out the these species 
              are bizarre objects that will not be tolerated in closed environments.
              Therefore we try to find out whether environments are written with n or 
              m. Can you tell the difference?`,
  link: 'https://arxiv.org/pdf/1806.02988.pdf',
  childrenPapers:[
    '1609.08144',
    '1606.02960',
    '1609.07843',
    '1708.02182',
    '1702.02540'
  ]
}


export default class GrapherTool extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> 
        <Search/>
        <GraphSurface
          searchResult={searchResult}
        />
      </div>
    );
  }
}