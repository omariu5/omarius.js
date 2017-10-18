// check if the string is youtube link.
function is_yt(string){
               if (string.indexOf('youtu') !== -1)
                       return true;
               else return false;        
    }
    
    // check if the link is soundcloud.
    function is_sc(string){
               if (string.indexOf('soundcloud.com') !== -1)
                       return true;
               else return false;
    }
    
    // get the youtube id from the link.
    function yt_id(videoLink) {
    var link_array = videoLink.split("/");
    var link_end = link_array[link_array.length - 1];
    var link_array = link_end.split("&");
    var yt_code = link_array[0];
        if (yt_code.indexOf("vi=") !== -1) { yt_code=yt_code.split("vi="); yt_code=yt_code[yt_code.length - 1]; }
        if (yt_code.indexOf("v=") !== -1) { yt_code=yt_code.split("v="); yt_code=yt_code[yt_code.length - 1]; }
        if (yt_code.indexOf("?") !== -1) { yt_code=yt_code.split("?"); yt_code=yt_code[0]; }
        return yt_code;
  }
  
  // return iframe element from youtube id.
function yt_embed(youtube_id)
{
    return '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+youtube_id+'" frameborder="0" allowfullscreen></iframe>';
}

// return youtube link from youtube id. 
function yt_link(youtube_id)
{
    return 'https://www.youtube.com/watch?v='+youtube_id;
}
