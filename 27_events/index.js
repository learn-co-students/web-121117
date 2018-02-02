document.addEventListener('DOMContentLoaded', function(event){
  console.log("~~~THE DOM HAS LOADED~~~")
  /*
    Remember that whatever we put in this function is
    scoped here, so you cannot call it in the console.
  */


  /* --Adding one event listener to one element--
  Remember that this will only apply to the single element,
  in this case the first element.
  */

  // const p = document.querySelector('p')
  // p.addEventListener('click', function(event){
  //   event.target.style.color = 'blue'
  // })

  /* --Adding multiple event listeners to multiple elements--
  Here we are grabbing all of the specific selectors, then
  iterating through our array and adding the event listeners.
  This works but only when we have things already on the page.
  When we try to dynamically add things, the new elements won't
  have the event listeners
  */

  // const pTags = document.querySelectorAll('p')
  // const aTags = document.querySelectorAll('a')
  //
  // pTags.forEach(function(pTag){
  //   pTag.addEventListener('click', function (event){
  //     event.target.style.backgroundColor = 'blue'
  //   })
  // })
  //
  // aTags.forEach(function(aTag){
  //   aTag.addEventListener('click', function(event){
  //     event.preventDefault()
  //     event.target.parentNode.remove()
  //   })
  // })


  /* --Event Delegation--
  Now we attribute our events based upon the 'event.target.tagName'.
  We want our actions to only happen to elements within our 'mainContainer'.
  So if we were to add elements outside of this, they wouldn't receive the
  event listener. So that way when we move to dynamically adding elements,
  we will be able to maintain the functionality onto it and not worrying
  about new elements
  */
  // const mainContainer = document.querySelector('main')
  //
  // mainContainer.addEventListener('click', function(event){
  //   if(event.target.tagName === 'P'){
  //     turnsBlue(event)
  //   } else if(event.target.tagName === 'A'){
  //     removeFromPage(event)
  //   }
  // })
  //
  // function turnsBlue(event){
  //   event.target.style.backgroundColor = 'blue'
  // }
  //
  // function removeFromPage(event){
  //   event.preventDefault()
  //   event.target.parentNode.remove()
  // }

  /* --Adding Elements onto the DOM--
  Alright, we are cool kids now. We can add event listeners
  and make sure that all elements have them. Now let's try to
  make sure we can dynamically add the elements. We gotta
  attach an event listener to our *form* on *submit*. We also
  need to be sure to prevent the default behavior to avoid a page refresh.
  From there we can grab information from our DOM and create elements
  to be appended onto our main container.
  */
  // const form = document.querySelector('form')
  //
  // form.addEventListener('submit', handlesFormSubmit)
  //
  // function handlesFormSubmit(event){
  //   event.preventDefault()
  //
  //   const input = document.querySelector('input[type="text"]')
  //
  //   const pContainer = document.createElement('p')
  //   pContainer.innerText = `${input.value} `
  //
  //   const aTag = document.createElement('a')
  //   aTag.innerText = 'x'
  //   aTag.href = '#'
  //
  //   pContainer.append(aTag)
  //   mainContainer.append(pContainer)
  //   input.value = ''
  // }
})
