import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Items(props) {
    return (
        <div className={props.className}>
            {props.items}
        </div>
    )
}

function App() {
    const [items, setItems] = React.useState([]);
    const [currentItem, setCurrentItem] = React.useState({
        text: '',
        key: ''
    })

    const handleCahnge = event => {
        setCurrentItem({
            text: event.target.value,
            key: ''
        })
    }

    const handleClick = () => {
        if(currentItem.text) {
            setItems([...items, currentItem]);
            setCurrentItem({
                text: currentItem.text,
                key: Date.now()
            })
        }
    }

    const deleteItem = key => {
        const filteredArr = items.filter(item => item.key !== key);
        setItems(filteredArr)
    }

    const itemsList = items.map(item => (
        <div className='items' key={item.key}>
            <div className='item'>{item.text}</div>
            <button className='delete' onClick={() => deleteItem(item.key)}>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
        </div>
    ))

    return (
        <div className='container'>
            <header>TO-DO APP</header>

            <div className='content-container'>
                
        
                <div className='input-container'>
                    <input className='input' value={currentItem.text} onChange={handleCahnge}></input>
                    <button className='add' onClick={handleClick}>ADD</button>
                </div>
                    
                <Items className='items-container' items={itemsList} />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));