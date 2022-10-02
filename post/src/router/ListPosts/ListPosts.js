/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { getAllPosts } from './service/posts.service';
import './ListPosts.scss';
import OnePost from '../../view/OnePost/OnePost';

function ListPosts() {
  const router = useHistory()
  const [listPosts, setListPosts] = useState([])
  // listPost tu jest pustą tablicą, mogę zminić za pomocą metody setListPosts
  const userName = [
    {
      name: "Adam Mickiewicz",
      id: 1
    },
    {
      name: "Henryk Sienkiewicz",
      id: 2
    },
    {
      name: "Wiesława Szymborska",
      id: 3
    },
    {
      name: "Juliusz Słowacki",
      id: 4
    },
    {
      name: "Stefan Żeromski",
      id: 5
    },
    {
      name: "Andrzej Sapkowski",
      id: 6
    },
    {
      name: "Stanisław Lem",
      id: 7
    },
    {
      name: "Krzysztof Kamil Baczyński",
      id: 8
    },
    {
      name: "Remigiusz Mroz",
      id: 9
    },
    {
      name: "Blanka Lipińska",
      id: 10
    }
  ]

  useEffect(() => {
    const posts = getAllPosts(); // zamawiam pizze
    posts
      .then(res => {
        // then to moment kiedy dostaję pizze
        const data = res.data.map(item => {
          const user = userName.find(name => name.id === item.userId)
          return { ...user, ...item }
        })
        console.log(data)
        // data to odpowiedz z serwera - to do

        setListPosts(data)
        // zminiło to listPost z pustej tablicy na tablice z objekatki z BE, nie kumam jak pobrać el. z backendu !!!!! to do
      })
      .catch(err => {
        // nie dostałem pizzy, składam rekalmację, 
        console.error(err)
      })
      .finally(
      // to co robię bez względu na to czy dostałem czy nie dostałem pizzy

    )

  }, [])
  const goToEdite = (id) => {
    router.push(`post/${id}`)
    console.log(router)
    console.log(id)
  }
  const post = listPosts.map(item => {
    return (
      <OnePost 
        id={item.id} 
        body={item.body} 
        title={item.title} 
        name={item.name}
        userId={item.userId}
        goToEdite={goToEdite}
      />
    ) 
  })
  return (
    <div>
      <h1>Lista Postów</h1>
      <div className='grid'>
        {post}
      </div>

    </div>
  )
}

export default ListPosts