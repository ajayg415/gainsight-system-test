import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { setSortKey, setSortOrder, setSearchString } from './../../store/actions'

import config from './../../config'
import './filer.css'

const Filter = props => {
  const { setSort, setOrder, setSearch, gamesData } = props;
  
  const [ searchString, setSearchString] = useState('');
  const [ sortIcon, setSortIcon ] = useState('');
  const [ showAutoComplete, setShowAutoComplete ] = useState(false);
  const [ autoCompleteData, setAutoCompleteData] = useState([]);
  useEffect(()=>{
    const titles = gamesData.map(obj => obj.title)
    setAutoCompleteData([...new Set(titles)]);
  },[gamesData]);

  const changeSort = e => {
    const val = e.target.value;
    if(val !== '-1'){
      setSortIcon('arrow_upward');
      setSort(val)
    }else{
      setSortIcon('');
      setSort('')
    }
  }

  const changeSortOrder = () => {
    const ord = ((sortIcon == '') ? 'asc' : (sortIcon === 'arrow_upward' ? 'desc': 'asc'));
    setOrder(ord)
    setSortIcon((ord==='arrow_upward')?'arrow_upward':'arrow_downward');
  }
  const changeGroupBy = e => {
    console.log(e.target.value)
  }

  const changeSearch = e => {
    const val = e.target.value;
    const titles = gamesData.reduce((a,c)=> {
      return c.title.toLowerCase().indexOf(val) > -1 ? [...a, c.title]: [...a]
    },[])
    setSearchString(val);
    setAutoCompleteData([...new Set(titles)])
    setSearch(val.trim());
  }

  const selectsLi = e => {
    console.log('selectsLi', e);
  }
  const selectsUl = e => {
    console.log('selectsUl', e)
  }

  return (
    <div className="row filter">
      <div className='col s12 m4 search'>
        <input type="text" 
          value={searchString}
          placeholder="Search Game" 
          onChange={changeSearch}
          onFocus={()=>setShowAutoComplete(true)}
          onBlur={()=>setShowAutoComplete(false)}/>
        <ul onClick={selectsUl} className={showAutoComplete? 'show collection':'hide collection'}>
          {autoCompleteData.map(title => {
            return <li onClick={selectsLi} className="collection-item" key={title}>{title.toUpperCase()}</li>
          })
          }
        </ul>
      </div>

      <div className='col s12 m4 group'>
        <select className="select-dropdown" onChange={changeGroupBy}>
          <option value="-1">Group By...</option>
          {config.groupByKeys.map(item=>{
            return <option value={item.value} key={item.value}>{item.name}</option>
          })}
        </select>
      </div>

      <div className='col s11 m3 sort row'>
        <div className='col s10'>
          <select className="select-dropdown" onChange={changeSort}>
            <option value="-1">Sort By...</option>
            {config.sortKeys.map(item=>{
              return <option value={item.value} key={item.value}>{item.name}</option>
            })}
          </select>
        </div>
        <div className='col s1 sort-icon'>
          <span onClick={changeSortOrder}>
            <i className="material-icons" title="Sort in ascending or decending order">{sortIcon}</i> 
          </span>
        </div>
      </div>
    </div>
  )
}

Filter.propTypes = {
  setSort: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  gamesData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired
  })).isRequired
}

const mapDispatchToProps = dispatch => ({
  setSort : data => dispatch(setSortKey(data)),
  setOrder: data => dispatch(setSortOrder(data)),
  setSearch: data => dispatch(setSearchString(data))
});

const mapStateToProps = state => ({
  gamesData : state.gamesReducer.dataFromAjax
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);