# Project Overview
<!-- ![gif](https://media.giphy.com/media/uUmwahj9HbmkllSonz/giphy.gif) -->

<img src="https://media.giphy.com/media/uUmwahj9HbmkllSonz/giphy.gif" alt="give me my panda prize" width=300px>

## Project Links

- [github repo link](https://github.com/r-shahid/art-generator)
- [add your deployment link]()

## Project Description

This is a website where users can generate a random piece of public domain art from the Metropolitan Museum of Art's collection. Users can also search for a specific piece of art by its title, or see a number of results by searching the artist or image tags. 

## API

[Metropolitan Museum of Art Collection API](https://collectionapi.metmuseum.org/public/collection/v1/) 

Example: https://collectionapi.metmuseum.org/public/collection/v1/objects/24
```
{
"objectID": 24,
"isHighlight": false,
"accessionNumber": "16.74.33",
"accessionYear": "1916",
"isPublicDomain": false,
"primaryImage": "",
"primaryImageSmall": "",
"additionalImages": [],
"constituents": null,
"department": "The American Wing",
"objectName": "Centavos",
"title": "Coin, 10 Centavos",
"culture": "Mexican",
"period": "",
"dynasty": "",
"reign": "",
"portfolio": "",
"artistRole": "",
"artistPrefix": "",
"artistDisplayName": "",
"artistDisplayBio": "",
"artistSuffix": "",
"artistAlphaSort": "",
"artistNationality": "",
"artistBeginDate": "",
"artistEndDate": "",
"artistGender": "",
"artistWikidata_URL": "",
"artistULAN_URL": "",
"objectDate": "1860–70",
"objectBeginDate": 1860,
"objectEndDate": 1870,
"medium": "Nickel",
"dimensions": "Diam. 3/4 in. (1.9 cm)",
"creditLine": "Gift of Mrs. Russell Sage, 1916",
"geographyType": "Made in",
"city": "",
"state": "",
"county": "",
"country": "Mexico",
"region": "",
"subregion": "",
"locale": "",
"locus": "",
"excavation": "",
"river": "",
"classification": "Metal",
"rightsAndReproduction": "",
"linkResource": "",
"metadataDate": "2020-03-02T21:50:01.377Z",
"repository": "Metropolitan Museum of Art, New York, NY",
"objectURL": "https://www.metmuseum.org/art/collection/search/24",
"tags": null,
"objectWikidata_URL": "",
"isTimelineWork": false,
"GalleryNumber": ""
}
```


## Wireframes

* [Mobile - Home](https://res.cloudinary.com/rshahid/image/upload/v1601659208/Mobile/Mobile-Home_yrbcfz.png)
* [Mobile - Random](https://res.cloudinary.com/rshahid/image/upload/v1601659202/Mobile/Mobile-Random_ihacvq.png)
* [Mobile - Search](https://res.cloudinary.com/rshahid/image/upload/v1601658846/Mobile/Mobile-Search_Results_v2htcc.png)
* [Mobile - Search Result Clicked](https://res.cloudinary.com/rshahid/image/upload/v1601658846/Mobile/Mobile-Search_Result_Clicked_ksz2qm.png)
<hr>

* [Tablet - Home](https://res.cloudinary.com/rshahid/image/upload/v1601659479/Tablet/Tablet-Home_z8dwoz.png)
* [Tablet - Random](https://res.cloudinary.com/rshahid/image/upload/v1601659478/Tablet/Tablet-Random_obrqfc.png)
* [Tablet - Search](https://res.cloudinary.com/rshahid/image/upload/v1601659478/Tablet/Tablet-Search_Results_phkihu.png)
* [Tablet - Search Result Clicked](https://res.cloudinary.com/rshahid/image/upload/v1601659479/Tablet/Tablet-Search_Results_Clicked_jja6yu.png)
<hr>

* [Desktop - Home](https://res.cloudinary.com/rshahid/image/upload/v1601659728/Desktop/Desktop-Home_mvocyb.png)
* [Desktop - Random](https://res.cloudinary.com/rshahid/image/upload/v1601659728/Desktop/Desktop-Random_kiar9c.png)
* [Desktop - Search](https://res.cloudinary.com/rshahid/image/upload/v1601659728/Desktop/Desktop-Search_Results_rqsgcn.png)
* [Desktop - Search Result Clicked](https://res.cloudinary.com/rshahid/image/upload/v1601659728/Desktop/Desktop-Search_Results_Clicked_ucowhb.png)

<hr>

* [react architecture](https://docs.google.com/drawings/d/1a8k2bTIiIumL3zatI5njL61af6T3PbKivv2kbtVV6E4/edit?usp=sharing)


### MVP/PostMVP

#### MVP
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP

- Find another api for more information on artworks rendered or for art-related events (??if that exists)
- Add information about the images used on the Home page to the Search page
- Try to style the images on the home page with z-index instead of setting them as background image for each div

## Components

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull| 
| Header | This will render the header include the nav | 
| Footer | This will render the footer| 
| Main|Includes React Router with all Routes|
|Home|The home page|
|Random|This page contains a button to show a random image with details|
|Search|Contains search bar and results|
|Result|Users click on search results from the Search component. This page shows a bigger image and details|



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App, Header, Footer, Home | H | 2 | 3 | 3 |
|Search| H|1.5hrs|||
|Random| H|1.5hrs|||
| Working with API | H | 4hrs| 2 | |
|Styling|M|3hrs|||
| Total | |12 | | |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

There are almost 500,000 items included in this API. Each item has a unique object ID, but these ID numbers go up to the 800,000s (even though the count starts at 1). Also, only about 406,000 images are in the public domain. This meant that my handleSubmit function would return undefined every time an image was not in the public domain or if the object ID number was skipped. Before starting this project, I thought it would be really challenging to get my function to return an image every time, but all I needed was an if statement that calls the function again.

```
const handleSubmit = async () => {
        let randomimg = Math.floor(Math.random() * 823616)
        const imgSrc = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomimg}`;
        const response = await fetch(imgSrc);
        const cheese = await response.json();
        setRandomImg(cheese)
        if (cheese.primaryImage === undefined || cheese.isPublicDomain === false){
            handleSubmit()
        }};
```
