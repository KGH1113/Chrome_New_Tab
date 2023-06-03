const new_tab_url = localStorage.getItem('start_page_url');
try {
    window.open(new_tab_url, '_self');
} catch(e) {
    alert('Cannot open ' + new_tab_url);
}