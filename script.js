(function(window, document) {

  var layout = document.getElementById('layout'),
    menu = document.getElementById('menu'),
    menuLink = document.getElementById('menuLink'),
    content = document.getElementById('main');

  function toggleClass(element, className) {
    var classes = element.className.split(/\s+/),
      length = classes.length,
      i = 0;

    for (; i < length; i++) {
      if (classes[i] === className) {
        classes.splice(i, 1);
        break;
      }
    }
    // The className is not found
    if (length === classes.length) {
      classes.push(className);
    }

    element.className = classes.join(' ');
  }

  function toggleAll(e) {
    var active = 'active';

    e.preventDefault();
    toggleClass(layout, active);
    toggleClass(menu, active);
    toggleClass(menuLink, active);
  }

  menuLink.onclick = function(e) {
    toggleAll(e);
  };

  content.onclick = function(e) {
    if (menu.className.indexOf('active') !== -1) {
      toggleAll(e);
    }
  };



}(this, this.document));

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function passe1() {
  var correta = new Array('istecrci', 'Sim');
  var p1 = prompt("Digita a palavra passe!");
  var tentativas = 0;
  if (p1 !== correta[0]) {
    while (p1 !== correta[0]) {
      if (p1 == null) {
        break;
      }
      p1 = prompt('Passe errada! Tente novamente!');      
      if (tentativas == 1) {
        var rec = prompt('Deseja recuperar a palavra passe?(Sim,Não)');
        if (rec == correta[1]) {
          window.location.href = "recuperar.html";
          break;
        }
        if (rec !== correta[1] || rec == null) {
          break;
        }
      }
      tentativas++;
    }
  }
  else {
    window.location.href = "RCI_presentation.html";
  }
}

function passe2() {
  var correta = new Array('istecac', 'Sim');
  var p2 = prompt("Digita a palavra passe!");
  var tentativas = 0;
  if (p2 !== correta[0]) {
    
    while (p2 !== correta[0]) {
      if (p2 == null) {
        alert("Tente novamente mais tarde!");
        break;
      }
      p2 = prompt('Passe errada! Tente novamente!');
      
      if (tentativas == 1) {
        var rec = prompt('Deseja recuperar a palavra passe?(Sim,Não)');
        if (rec == correta[1]) {
          window.location.href = "recuperar.html";
          break;
        }
        if (rec !== correta[1] || rec == null) {
          alert("Tente novamente mais tarde!");
          break;
        }
      }
      tentativas++;
    }
  }
  else {
    window.location.href = "AC_presentation.html";
  }
}
