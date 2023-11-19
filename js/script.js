const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btnEl = document.getElementById('menu-btn');
const menuEl = document.getElementById('menu');
const logoEl = document.getElementById('logo');

// Tabs menu event event listener
tabs.forEach((tab) => {
  tab.addEventListener('click', onTabClick);
})

//Hamburger button listener
btnEl.addEventListener('click', navToggle);

function onTabClick(e) {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    )
  })
  // Hide all panels
  panels.forEach((panel) => panel.classList.add('hidden'));

  // Activate a new tab and panel based on the target
  e.target.classList.add('border-softRed', 'border-b-4');
  const classString = e.target.getAttribute('data-target');
  document
  .getElementById('panels') 
  .getElementsByClassName(classString)[0]
  .classList.remove('hidden')
}

function navToggle(){
  btnEl.classList.toggle('open');
  menuEl.classList.toggle('flex');
  menuEl.classList.toggle('hidden');
  
  if(menuEl.classList.contains('flex')) {
    logoEl.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    logoEl.setAttribute('src', './images/logo-bookmark.svg');
  }
}


