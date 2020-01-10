const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.map(blog => blog.likes)
      .reduce((acc, cur) => acc + cur, 0
      )
}

const favoriteBlog = (blogs) => {
  //const maxBlog = blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog)
  return blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog)
}

const mostBlogs = (blogs) => {
  const arr = blogs.map(blog => {
    return (blog.author)
  })

  const uniqueAuthors = arr.filter((a, b) => arr.indexOf(a) === b)

  let authorsBlogs = []

  uniqueAuthors.forEach(author => {
    let counter = 0
    const currentAuthor = author
    arr.forEach(author => {
      if(author === currentAuthor) {
        counter++
      }
    })
    const authorObj = {
      author: currentAuthor,
      blogs: counter
    }
    authorsBlogs.push(authorObj)
  })

  return authorsBlogs.reduce((max, authorObj) => max.blogs > authorObj.blogs ? max : authorObj)
}

const mostLikes = (blogs) => {
  const arr = blogs.map(blog => {
    return (blog.author)
  })

  const uniqueAuthors = arr.filter((a, b) => arr.indexOf(a) === b)

  let authorsVotes = []

  uniqueAuthors.forEach(author => {
    let counter = 0
    const currentAuthor = author
    blogs.forEach(blog => {
      if(blog.author === currentAuthor) {
        counter += blog.likes
      }
    })
    const authorObj = {
      author: currentAuthor,
      likes: counter
    }
    authorsVotes.push(authorObj)
  })

  return authorsVotes.reduce((max, authorObj) => max.likes > authorObj.likes ? max : authorObj)
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}