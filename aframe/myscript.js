document.addEventListener('keydown', function(event) {
    document.querySelectorAll('.listenonkey').forEach(function(obj){
      obj.setAttribute('position', '0 0 0');
    });
  });