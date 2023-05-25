const projectList = document.querySelector('.project-list');

async function renderProject() {
  try {
    const response = await fetch('./assets/project.json');
    const data = await response.json();
    const frag = document.createDocumentFragment();
    data.projects.forEach((el) => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      const h2 = document.createElement('h2');
      const p = document.createElement('p');
      const a = document.createElement('a');

      li.classList.add('project-item');

      img.src = el.image;
      img.alt = el.name;
      h2.textContent = el.id + ' - ' + el.name;
      p.textContent = el.description;
      a.href = el.url;
      a.target = '_blank';
      a.textContent = 'View Project';

      li.appendChild(img);
      li.appendChild(h2);
      li.appendChild(p);
      li.appendChild(a);

      frag.appendChild(li);
    });
    projectList.appendChild(frag);
  } catch {
    console.log('Error');
  }
}

renderProject();
