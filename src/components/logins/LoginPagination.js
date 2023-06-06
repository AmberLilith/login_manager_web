import './loginPagination.css';

const LoginPagination = ({ updateActivePage, activePage, setActivePage, updateUrl, totalPages, theme }) => {
    let pagesNumbers = [];
    for (let number = 0; number < totalPages; number++) {
        pagesNumbers.push(number);
    }
    //TODO ao excluir o ultimo registro da página atualmente selecionada, selecionar a próxima pagina se a atual não for a última.
    //Se for a última, selecionar a anterior.
    const setActiveItem = (id) => {
        for (let number = 0; number < pagesNumbers.length; number++) {
            document.getElementById('page_index_' + number).classList.remove('active');
        }        
            document.getElementById(id).classList.add('active');     
            setActivePage(id);
    }

    function active(){
        
    }
    return (
        <nav>
            <ul className="pagination">
                {pagesNumbers.map(pageNumber => (
                    <li key={"page_index_" + pageNumber} id={"page_index_" + pageNumber}  className={pageNumber == 0 ? "page-item active" : "page-item"}><a className={theme.loginPagination.pageLink} onClick={() => [updateActivePage(pageNumber), updateUrl(pageNumber), setActiveItem("page_index_" + pageNumber)]} href="#">{pageNumber} </a></li>
                ))}                
            </ul>
        </nav>
    )
}

export default LoginPagination;



