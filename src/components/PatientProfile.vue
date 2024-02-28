<template>
  <div class="patient-profile">
    <h2>Patient's Profile</h2>
    <div class="profile">
      <img :src="user.profilePicture" alt="Profile Picture" class="profile-picture">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
    </div>
    <div class="details">
      <h3>User Details</h3>
      <ul>
        <li><strong>Username:</strong> {{ user.username }}</li>
        <li><strong>Location:</strong> {{ user.location }}</li>
        <li><strong>Joined:</strong> {{ user.joined }}</li>
        <li><strong>Doctor's name:</strong> {{ user.doctor }}</li>
        <li><strong>Assigned medical center:</strong> {{ user.assignedCenter }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        profilePicture: 'https://via.placeholder.com/150', // Dummy profile picture URL
        name: 'Evelia Molina',
        email: 'evemolina7@gmail.com',
        username: 'evemf',
        location: 'Barcelona, Spain',
        joined: 'January 6, 2019',
        doctor: 'Maria Ladueña',
        assignedCenter: 'CAP Poblenou'
      }
    };
  }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.profile {
  text-align: center;
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.details {
  margin-top: 20px;
}

.details h3 {
  margin-bottom: 10px;
}

.details ul {
  list-style-type: none;
  padding: 0;
}

.details ul li {
  margin-bottom: 5px;
}

@media screen and (max-width: 768px) {
  .dashboard {
    padding: 20px;
  }
}
</style>