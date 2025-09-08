import Item from "./Item";

function List() { 

    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="porsche Cayman3" />
                <Item marca="porsche Cayman2" />
                <Item marca="porsche Cayman1" />
            </ul>
        </>
    )
}

export default List;    