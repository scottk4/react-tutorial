
function List({items=[], category="Category"}){
    
    // const itemList = props.items;
    // const category = props.category
    const categoryTopic = category
    const itemList = items;

    // items.sort((a, b) => b.name.localeCompare(a.name));
    // items.sort((a, b) => b.calories - a.calories);
    
    // const lowCalitems = items.filter(item => item.calories < 100)
    // const highCalitems = items.filter(item => item.calories >= 100)

    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b></li>);
    return(<>
            <h3 className="list-category">{categoryTopic}</h3>
            <ol className="list-items">{listItems}</ol>
          </>);
}
export default List