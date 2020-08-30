import React, { useEffect } from 'react';
import Company from './Company';
import axios from 'axios';
import { setCompanies, selectCompanies, selectFollowers, setFollowers } from '../../../redux/reducers/followSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Suggestions() {

  const dispatch = useDispatch()
  const companiesRaw = useSelector(selectCompanies)
  const companies = (companiesRaw) ? JSON.parse(companiesRaw) : [];
  const followers = useSelector(selectFollowers)

  useEffect(() => {
    async function getCompanies() {
      return await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${Math.floor(Math.random() * 19) + 1}`
      )
      .then((characters) => dispatch(setCompanies(JSON.stringify(characters.data.results))))
    }
    if(!companiesRaw) getCompanies()
  }, [dispatch, companiesRaw]);


  function hideCompany(companyId) {
    dispatch(setFollowers([...followers, companyId]))
  }

  return (
    <div className="box-suggestions">
      <p style={{ color: 'gray', fontSize: 14 }}>Suggestions For You</p>
      <ul>
        {companies.map((company) => {
          return (followers.includes(company.id))
            ? null
            : <Company key={company.id} info={company} hideCompany={hideCompany} />
        })}
      </ul>
    </div>
  )
}