const users = [
    {
      name: 'Alice Johnson',
      position: 'Software Engineer',
      profileImage: 'https://via.placeholder.com/64?text=AJ',
      socialLinks: {
        browser: 'https://alicejohnson.dev',
        linkedin: 'https://linkedin.com/in/alicejohnson',
        instagram: 'https://instagram.com/alicejohnson',
        facebook: 'https://facebook.com/alicejohnson',
        twitter: 'https://twitter.com/alicejohnson'
      },
      type: 'follower' // Can be 'following', 'follower', or 'public'
    },
    {
      name: 'Bob Smith',
      position: 'Product Manager',
      profileImage: 'https://via.placeholder.com/64?text=BS',
      socialLinks: {
        browser: 'https://bobsmith.dev',
        linkedin: 'https://linkedin.com/in/bobsmith',
        instagram: null,
        facebook: 'https://facebook.com/bobsmith',
        twitter: 'https://twitter.com/bobsmith'
      },
      type: 'following'
    },
    {
      name: 'Charlie Brown',
      position: 'UI/UX Designer',
      profileImage: 'https://via.placeholder.com/64?text=CB',
      socialLinks: {
        browser: 'https://charliebrown.dev',
        linkedin: null,
        instagram: 'https://instagram.com/charliebrown',
        facebook: 'https://facebook.com/charliebrown',
        twitter: 'https://twitter.com/charliebrown'
      },
      type: 'public'
    },
    {
      name: 'David Wilson',
      position: 'Backend Developer',
      profileImage: 'https://via.placeholder.com/64?text=DW',
      socialLinks: {
        browser: 'https://davidwilson.dev',
        linkedin: 'https://linkedin.com/in/davidwilson',
        instagram: null,
        facebook: 'https://facebook.com/davidwilson',
        twitter: 'https://twitter.com/davidwilson'
      },
      type: 'follower'
    },
    {
      name: 'Emma Davis',
      position: 'Data Scientist',
      profileImage: 'https://via.placeholder.com/64?text=ED',
      socialLinks: {
        browser: 'https://emmadavis.dev',
        linkedin: null,
        instagram: 'https://instagram.com/emmadavis',
        facebook: 'https://facebook.com/emmadavis',
        twitter: 'https://twitter.com/emmadavis'
      },
      type: 'following'
    },
    {
      name: 'Frank Moore',
      position: 'DevOps Engineer',
      profileImage: 'https://via.placeholder.com/64?text=FM',
      socialLinks: {
        browser: 'https://frankmoore.dev',
        linkedin: 'https://linkedin.com/in/frankmoore',
        instagram: 'https://instagram.com/frankmoore',
        facebook: 'https://facebook.com/frankmoore',
        twitter: 'https://twitter.com/frankmoore'
      },
      type: 'public'
    },
    {
      name: 'Grace Lee',
      position: 'Marketing Specialist',
      profileImage: 'https://via.placeholder.com/64?text=GL',
      socialLinks: {
        browser: 'https://gracelee.dev',
        linkedin: 'https://linkedin.com/in/gracelee',
        instagram: 'https://instagram.com/gracelee',
        facebook: 'https://facebook.com/gracelee',
        twitter: 'https://twitter.com/gracelee'
      },
      type: 'follower'
    },
    {
      name: 'Henry Taylor',
      position: 'Business Analyst',
      profileImage: 'https://via.placeholder.com/64?text=HT',
      socialLinks: {
        browser: 'https://henrytaylor.dev',
        linkedin: null,
        instagram: null,
        facebook: 'https://facebook.com/henrytaylor',
        twitter: 'https://twitter.com/henrytaylor'
      },
      type: 'following'
    },
    {
      name: 'Ivy Anderson',
      position: 'Content Creator',
      profileImage: 'https://via.placeholder.com/64?text=IA',
      socialLinks: {
        browser: 'https://ivyanderson.dev',
        linkedin: 'https://linkedin.com/in/ivyanderson',
        instagram: 'https://instagram.com/ivyanderson',
        facebook: 'https://facebook.com/ivyanderson',
        twitter: 'https://twitter.com/ivyanderson'
      },
      type: 'public'
    },
    {
      name: 'Jack Robinson',
      position: 'Sales Manager',
      profileImage: 'https://via.placeholder.com/64?text=JR',
      socialLinks: {
        browser: 'https://jackrobinson.dev',
        linkedin: 'https://linkedin.com/in/jackrobinson',
        instagram: 'https://instagram.com/jackrobinson',
        facebook: 'https://facebook.com/jackrobinson',
        twitter: 'https://twitter.com/jackrobinson'
      },
      type: 'follower'
    },
    {
      name: 'Jack Robinson',
      position: 'Sales Manager',
      profileImage: 'https://via.placeholder.com/64?text=JR',
      socialLinks: {
        browser: 'https://jackrobinson.dev',
        linkedin: 'https://linkedin.com/in/jackrobinson',
        instagram: 'https://instagram.com/jackrobinson',
        facebook: 'https://facebook.com/jackrobinson',
        twitter: 'https://twitter.com/jackrobinson'
      },
      type: 'follower'
    },
    {
      name: 'Jack Robinson',
      position: 'Sales Manager',
      profileImage: 'https://via.placeholder.com/64?text=JR',
      socialLinks: {
        browser: 'https://jackrobinson.dev',
        linkedin: 'https://linkedin.com/in/jackrobinson',
        instagram: 'https://instagram.com/jackrobinson',
        facebook: 'https://facebook.com/jackrobinson',
        twitter: 'https://twitter.com/jackrobinson'
      },
      type: 'follower'
    },
    {
      name: 'Jack Robinson',
      position: 'Sales Manager',
      profileImage: 'https://via.placeholder.com/64?text=JR',
      socialLinks: {
        browser: 'https://jackrobinson.dev',
        linkedin: 'https://linkedin.com/in/jackrobinson',
        instagram: 'https://instagram.com/jackrobinson',
        facebook: 'https://facebook.com/jackrobinson',
        twitter: 'https://twitter.com/jackrobinson'
      },
      type: 'follower'
    },
    {
      name: 'Alice Johnson',
      position: 'Software Engineer',
      profileImage: 'https://via.placeholder.com/64?text=AJ',
      socialLinks: {
        browser: 'https://alicejohnson.dev',
        linkedin: 'https://linkedin.com/in/alicejohnson',
        instagram: 'https://instagram.com/alicejohnson',
        facebook: 'https://facebook.com/alicejohnson',
        twitter: 'https://twitter.com/alicejohnson'
      },
      type: 'follower' // Can be 'following', 'follower', or 'public'
    },
    {
      name: 'Bob Smith',
      position: 'Product Manager',
      profileImage: 'https://via.placeholder.com/64?text=BS',
      socialLinks: {
        browser: 'https://bobsmith.dev',
        linkedin: 'https://linkedin.com/in/bobsmith',
        instagram: null,
        facebook: 'https://facebook.com/bobsmith',
        twitter: 'https://twitter.com/bobsmith'
      },
      type: 'following'
    },
    {
      name: 'Charlie Brown',
      position: 'UI/UX Designer',
      profileImage: 'https://via.placeholder.com/64?text=CB',
      socialLinks: {
        browser: 'https://charliebrown.dev',
        linkedin: null,
        instagram: 'https://instagram.com/charliebrown',
        facebook: 'https://facebook.com/charliebrown',
        twitter: 'https://twitter.com/charliebrown'
      },
      type: 'public'
    },
    {
      name: 'David Wilson',
      position: 'Backend Developer',
      profileImage: 'https://via.placeholder.com/64?text=DW',
      socialLinks: {
        browser: 'https://davidwilson.dev',
        linkedin: 'https://linkedin.com/in/davidwilson',
        instagram: null,
        facebook: 'https://facebook.com/davidwilson',
        twitter: 'https://twitter.com/davidwilson'
      },
      type: 'follower'
    },
    {
      name: 'Emma Davis',
      position: 'Data Scientist',
      profileImage: 'https://via.placeholder.com/64?text=ED',
      socialLinks: {
        browser: 'https://emmadavis.dev',
        linkedin: null,
        instagram: 'https://instagram.com/emmadavis',
        facebook: 'https://facebook.com/emmadavis',
        twitter: 'https://twitter.com/emmadavis'
      },
      type: 'following'
    },
    {
      name: 'Alice Johnson',
      position: 'Software Engineer',
      profileImage: 'https://via.placeholder.com/64?text=AJ',
      socialLinks: {
        browser: 'https://alicejohnson.dev',
        linkedin: 'https://linkedin.com/in/alicejohnson',
        instagram: 'https://instagram.com/alicejohnson',
        facebook: 'https://facebook.com/alicejohnson',
        twitter: 'https://twitter.com/alicejohnson'
      },
      type: 'follower' // Can be 'following', 'follower', or 'public'
    },
    {
      name: 'Bob Smith',
      position: 'Product Manager',
      profileImage: 'https://via.placeholder.com/64?text=BS',
      socialLinks: {
        browser: 'https://bobsmith.dev',
        linkedin: 'https://linkedin.com/in/bobsmith',
        instagram: null,
        facebook: 'https://facebook.com/bobsmith',
        twitter: 'https://twitter.com/bobsmith'
      },
      type: 'following'
    },
    {
      name: 'Charlie Brown',
      position: 'UI/UX Designer',
      profileImage: 'https://via.placeholder.com/64?text=CB',
      socialLinks: {
        browser: 'https://charliebrown.dev',
        linkedin: null,
        instagram: 'https://instagram.com/charliebrown',
        facebook: 'https://facebook.com/charliebrown',
        twitter: 'https://twitter.com/charliebrown'
      },
      type: 'public'
    },
    {
      name: 'David Wilson',
      position: 'Backend Developer',
      profileImage: 'https://via.placeholder.com/64?text=DW',
      socialLinks: {
        browser: 'https://davidwilson.dev',
        linkedin: 'https://linkedin.com/in/davidwilson',
        instagram: null,
        facebook: 'https://facebook.com/davidwilson',
        twitter: 'https://twitter.com/davidwilson'
      },
      type: 'follower'
    },
    {
      name: 'Emma Davis',
      position: 'Data Scientist',
      profileImage: 'https://via.placeholder.com/64?text=ED',
      socialLinks: {
        browser: 'https://emmadavis.dev',
        linkedin: null,
        instagram: 'https://instagram.com/emmadavis',
        facebook: 'https://facebook.com/emmadavis',
        twitter: 'https://twitter.com/emmadavis'
      },
      type: 'following'
    },
    {
      name: 'Alice Johnson',
      position: 'Software Engineer',
      profileImage: 'https://via.placeholder.com/64?text=AJ',
      socialLinks: {
        browser: 'https://alicejohnson.dev',
        linkedin: 'https://linkedin.com/in/alicejohnson',
        instagram: 'https://instagram.com/alicejohnson',
        facebook: 'https://facebook.com/alicejohnson',
        twitter: 'https://twitter.com/alicejohnson'
      },
      type: 'follower' // Can be 'following', 'follower', or 'public'
    },
    {
      name: 'Bob Smith',
      position: 'Product Manager',
      profileImage: 'https://via.placeholder.com/64?text=BS',
      socialLinks: {
        browser: 'https://bobsmith.dev',
        linkedin: 'https://linkedin.com/in/bobsmith',
        instagram: null,
        facebook: 'https://facebook.com/bobsmith',
        twitter: 'https://twitter.com/bobsmith'
      },
      type: 'following'
    },
    {
      name: 'Charlie Brown',
      position: 'UI/UX Designer',
      profileImage: 'https://via.placeholder.com/64?text=CB',
      socialLinks: {
        browser: 'https://charliebrown.dev',
        linkedin: null,
        instagram: 'https://instagram.com/charliebrown',
        facebook: 'https://facebook.com/charliebrown',
        twitter: 'https://twitter.com/charliebrown'
      },
      type: 'public'
    },
    {
      name: 'David Wilson',
      position: 'Backend Developer',
      profileImage: 'https://via.placeholder.com/64?text=DW',
      socialLinks: {
        browser: 'https://davidwilson.dev',
        linkedin: 'https://linkedin.com/in/davidwilson',
        instagram: null,
        facebook: 'https://facebook.com/davidwilson',
        twitter: 'https://twitter.com/davidwilson'
      },
      type: 'follower'
    },
    {
      name: 'Emma Davis',
      position: 'Data Scientist',
      profileImage: 'https://via.placeholder.com/64?text=ED',
      socialLinks: {
        browser: 'https://emmadavis.dev',
        linkedin: null,
        instagram: 'https://instagram.com/emmadavis',
        facebook: 'https://facebook.com/emmadavis',
        twitter: 'https://twitter.com/emmadavis'
      },
      type: 'following'
    },
    ,
    {
      name: 'Ivy Anderson',
      position: 'Content Creator',
      profileImage: 'https://via.placeholder.com/64?text=IA',
      socialLinks: {
        browser: 'https://ivyanderson.dev',
        linkedin: 'https://linkedin.com/in/ivyanderson',
        instagram: 'https://instagram.com/ivyanderson',
        facebook: 'https://facebook.com/ivyanderson',
        twitter: 'https://twitter.com/ivyanderson'
      },
      type: 'public'
    },
    ,
    {
      name: 'Ivy Anderson',
      position: 'Content Creator',
      profileImage: 'https://via.placeholder.com/64?text=IA',
      socialLinks: {
        browser: 'https://ivyanderson.dev',
        linkedin: 'https://linkedin.com/in/ivyanderson',
        instagram: 'https://instagram.com/ivyanderson',
        facebook: 'https://facebook.com/ivyanderson',
        twitter: 'https://twitter.com/ivyanderson'
      },
      type: 'public'
    },
    ,
    {
      name: 'Ivy Anderson',
      position: 'Content Creator',
      profileImage: 'https://via.placeholder.com/64?text=IA',
      socialLinks: {
        browser: 'https://ivyanderson.dev',
        linkedin: 'https://linkedin.com/in/ivyanderson',
        instagram: 'https://instagram.com/ivyanderson',
        facebook: 'https://facebook.com/ivyanderson',
        twitter: 'https://twitter.com/ivyanderson'
      },
      type: 'public'
    },
    ,
    {
      name: 'Ivy Anderson',
      position: 'Content Creator',
      profileImage: 'https://via.placeholder.com/64?text=IA',
      socialLinks: {
        browser: 'https://ivyanderson.dev',
        linkedin: 'https://linkedin.com/in/ivyanderson',
        instagram: 'https://instagram.com/ivyanderson',
        facebook: 'https://facebook.com/ivyanderson',
        twitter: 'https://twitter.com/ivyanderson'
      },
      type: 'public'
    },
    {
      name: 'Alice Johnson',
      position: 'Software Engineer',
      profileImage: 'https://via.placeholder.com/64?text=AJ',
      socialLinks: {
        browser: 'https://alicejohnson.dev',
        linkedin: 'https://linkedin.com/in/alicejohnson',
        instagram: 'https://instagram.com/alicejohnson',
        facebook: 'https://facebook.com/alicejohnson',
        twitter: 'https://twitter.com/alicejohnson'
      },
      type: 'follower' // Can be 'following', 'follower', or 'public'
    },
    {
      name: 'Alice Johnson',
      position: 'Software Engineer',
      profileImage: 'https://via.placeholder.com/64?text=AJ',
      socialLinks: {
        browser: 'https://alicejohnson.dev',
        linkedin: 'https://linkedin.com/in/alicejohnson',
        instagram: 'https://instagram.com/alicejohnson',
        facebook: 'https://facebook.com/alicejohnson',
        twitter: 'https://twitter.com/alicejohnson'
      },
      type: 'follower' // Can be 'following', 'follower', or 'public'
    },
    ,
    {
      name: 'Ivy Anderson',
      position: 'Content Creator',
      profileImage: 'https://via.placeholder.com/64?text=IA',
      socialLinks: {
        browser: 'https://ivyanderson.dev',
        linkedin: 'https://linkedin.com/in/ivyanderson',
        instagram: 'https://instagram.com/ivyanderson',
        facebook: 'https://facebook.com/ivyanderson',
        twitter: 'https://twitter.com/ivyanderson'
      },
      type: 'public'
    },
    ,
    {
      name: 'Ivy Anderson',
      position: 'Content Creator',
      profileImage: 'https://via.placeholder.com/64?text=IA',
      socialLinks: {
        browser: 'https://ivyanderson.dev',
        linkedin: 'https://linkedin.com/in/ivyanderson',
        instagram: 'https://instagram.com/ivyanderson',
        facebook: 'https://facebook.com/ivyanderson',
        twitter: 'https://twitter.com/ivyanderson'
      },
      type: 'public'
    },
    
  ];
  
  export default users;
  