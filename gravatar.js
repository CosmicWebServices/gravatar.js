var gravatar = function() {
  function getImage(email, size) {
    return '<img src="https://secure.gravatar.com/avatar/' + md5(email.trim().toLowerCase()) + '?s=' + size + '&d=mm">';
  }

  function getImageWithType(email, size, filetype) {
    return '<img src="https://secure.gravatar.com/avatar/' + md5(email.trim().toLowerCase()) + '?s=' + size + '&d=mm ' + filetype '">';
  }

  function getUserProfile(email) {
    return 'https://secure.gravatar.com/' + md5(email.trim().toLowerCase())';
  }
}
