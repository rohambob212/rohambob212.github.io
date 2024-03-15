import requests

API_URL = "https://api-inference.huggingface.co/models/bigcode/starcoder2-15b"

def video_by_user(username,perpage):
    url = f"https://www.aparat.com/etc/api/videoByUser/username/{username}/perpage/{perpage}"
    response = requests.get(url)
    return response.json()

def search(text,perpage):
    url = f"https://www.aparat.com/etc/api/videoBySearch/text/{text}/perpage/{perpage}"
    response = requests.get(url)
    return response.json()

def vu(user,vid):

    good = video_by_user(user,"10000")["videobyuser"][vid - 1]

    name = good['title']
    thumbnail = good['big_poster']
    url = "https://www.aparat.com/v/" + good['uid']
    views = good['visit_cnt']
    vide = [name,thumbnail,url,views]
    return vide

def ser(serc,num):
    good = search(serc,1000)["videobysearch"][num - 1]
    class vide:
        name = good['title']
        thumbnail = good['big_poster']
        url = "https://www.aparat.com/v/" + good['uid']
        views = good['visit_cnt']
    return vide

def deuni(ster):
    return ster.decode("unicode-escape")




