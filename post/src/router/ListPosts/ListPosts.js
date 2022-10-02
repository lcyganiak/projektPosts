import React, { useEffect, useState } from 'react'
import { getAllPosts } from './service/posts.service'
function ListPosts() {
  const [listPosts, setListPosts] = useState([])
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
          // console.log(name , item)
          return { ...user, ...item }

        })
        console.log(data)

        setListPosts(data)
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
    console.log(id)
  }
  const post = listPosts.map(item => {
    return (
      <div key={item.id}>
        <h2>Temat Posta:
          <span>{item.title}</span>
        </h2>
        <p>Autor: 
          <span>
            {item.name}
          </span>
        </p>
        <div>
          <p>{item.body}</p>
        </div>

        <button onClick={() => goToEdite(item.id) }>Edytuj zabiera do strony edytowania</button>

      </div>
    )
  })
  return (
    <div>
      <h1>Lista Postów</h1>
      {post}
    </div>
  )
}

export default ListPosts