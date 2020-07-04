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
        <div key={item.key}>
            {item.text}
            <button onClick={() => deleteItem(item.key)}>Deletar</button>
        </div>
    ))

    return (
        <div className='container'>
            <div className='container-input'>
                <input className='input' value={currentItem.text} onChange={handleCahnge}></input>
                <button className='add' onClick={handleClick}>Adicionar</button>
            </div>

            <div className='items-container'>
                <Items className='items' items={itemsList} />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));