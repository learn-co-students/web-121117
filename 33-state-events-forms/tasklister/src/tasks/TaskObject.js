let id = 0

const generateTaskObject = (t) => {

  return {
    text: t,
    id: ++id
  }
}

export default generateTaskObject
