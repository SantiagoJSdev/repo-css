import './btnSearch.css'

export const BtnSearch = () => {
  return (
    <div className='button__search'>
       <i className="fa fa-search" aria-hidden="true"></i>
      <input
      className='search__input'
        autoComplete='off'
        type='text'
        placeholder='Buscar'
      >
      </input>
     
    </div>
  )
}
