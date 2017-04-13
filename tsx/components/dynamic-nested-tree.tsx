import React from 'react';

const DynamicNestedItems = (props) => {
  const qcMenu = props.qcMenu
  return (
    <nav className="site">
      <ul>
        {mapStructure(qcMenu)}
      </ul>
    </nav>
  );
};


const mapStructure = (nodes) => {
    
    var nodeProps = function(props){
      var row = []
      // console.log (props)
      for (var i in props) {
        if (typeof props[i] !== 'object')
          row.push(" "+i+"==>"+props[i])
      }
      return row;
    }

    var listItem = function(node){
      // console.log (node)
        return (
          <li key={node.mlid}><a href={`${node.path}`}>{node.title}</a> 
            {nodeProps(node)}
          </li>
        )
    }
    var tree = function(node){
      return node.map(node => {
        return ( 
        <ul key={node.mlid}>
          {listItem(node)}
          {node.has_children ? tree(node.children): null }
        </ul>
        );
      })
  
    }
    var subMenu = function(node) {
      console.log (node)
    }
    if (nodes) {
      return nodes.map(node => {
        // return ( <li onClick={subMenu(node)} key={node.mlid}>
        return ( <li onClick={() => subMenu(node)} key={node.mlid} className="list-anchor">
          {node.title}
          {node.has_children ? tree(node.children) : null }
        </li>
        );
      })
    }
}

export default DynamicNestedItems;