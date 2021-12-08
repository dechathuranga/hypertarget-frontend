const scrape = require('website-scraper');



export default async (req, res) => {

  
const options = {
    urls: ['http://nodejs.org/'],
    directory: ''
  };
   
  // with async/await
  const result = await scrape(options);

  scrape({
    urls: ['http://nodejs.org/'],
    directory: '/path/to/save',
    sources: [
      {selector: 'img', attr: 'src'},
      {selector: 'link[rel="stylesheet"]', attr: 'href'},
      {selector: 'script', attr: 'src'}
    ]
  });
   
  // with promise
  scrape(options).then((result) => {});
   
  // or with callback
  scrape(options, (error, result) => {});

  };
