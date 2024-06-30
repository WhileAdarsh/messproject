import React from 'react';
import './WebCrator.css';
import github from '../../../imgs/github.png';
import Instagram from '../../../imgs/instagram.png';
import LinkedIn from '../../../imgs/linkedin.png';

const StudentDetails = () => {
  const openInstagram = (instagramUsername) => {
    window.open(`https://www.instagram.com/${instagramUsername}/`, '_blank');
  };
  const openLinkedIn = (linkedinUsername) => {
    window.open(`https://www.linkedin.com/in/${linkedinUsername}/`, '_blank');
  };
  const openGithub = (githubUsername) => {
    window.open(`https://www.github.com/${githubUsername}/`, '_blank');
  };

  const studentData = [
    {
      Name: "Adarsh Kumar",
      Registration_no: 20224027,
      LinkedIn: "adarsh-kumar-960205260",
      GitHub: "WhileAdarsh",
      Instagram: "adarsh_kumar_9009",
      color: 'green',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmv007LWIhwfQztKw6AALPl5zNrtIIvolBqach9_iYtw3DgPlPwGKCwKJ5GhwXGhVP6rk&usqp=CAU",
      customStyle: {
        borderRadius: '10px',
        marginTop: '4rem',
        color: 'white',
      },
    },
    {
      Name: "Aman Kumar",
      Registration_no: 20223274,
      LinkedIn: "aman-kumar-b74272270",

      GitHub: "Amans008",
      Instagram: "aman._.42",
      color: 'yellow',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5aJZEZmb7jLq3lwFvZITon73dd73gkvlo0v0SieeWhZdZY9_7VSkntK1n3J3IvshxLbU&usqp=CAU",
      customStyle: {
        borderRadius: '10px',
        marginTop: '9rem',
        color: 'white',
      },
    },
    {
      Name: "Tejaswi Kumar",
      Registration_no: 20224089,
      LinkedIn: "tejaswi-kumar-a27075317",
      GitHub: "Tejaswi-kumar63",
      Instagram: "tejaswi_kumar63",
      color: 'red',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCarTW0rnj7kIJAlj96k__8IDu604AwpJeOgrhuMDF5iATjzPJMezVN5bLOGphIoqzuCI&usqp=CAU",
      customStyle: {
        borderRadius: '10px',
        marginTop: '14rem',
        color: 'white',
      },
    },
  ];

  return (
    <div className="MainContainer78"style={{fontFamily:"Agbalumo"}}>
      <div className='student-container124'>
        {studentData.map((student, index) => (
          <div key={index} className={`student-box ${student.color}`} style={student.customStyle}>
            <img src={student.image} alt={student.Name} />
            <h2 className='F_text'>{student.Name}</h2>
            <span className='S_text'>{student.Registration_no}</span>
            <div className='SocialMedia_m'>
              <div><img src={github} alt="github" className='img_Socialmedia' onClick={() => openGithub(student.GitHub)} /></div>
              <div><img src={Instagram} alt="instagram" className='img_Socialmedia' onClick={() => openInstagram(student.Instagram)} /></div>
              <div><img src={LinkedIn} alt="linkedin" className='img_Socialmedia' onClick={() => openLinkedIn(student.LinkedIn)} /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDetails;
