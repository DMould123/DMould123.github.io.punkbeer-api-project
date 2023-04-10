<template>
  <div id="company-profile">
    <h1>BEERS FOR THE PEOPLE</h1>
    <p>
      Beers for the People was opened in 2019, founded by Gordon Pepperpott and
      produces 350,000 barrels of beer annually, as well as distributing 2.5m
      bottles around the world.
    </p>

    <p>
      Beers for the People is a rapidly growing brewery in Sweden and is often
      seen on TV adverts. It houses three warehouses in Stockholm, Malmö and
      Örebro and has plans to open two more in late 2022 in Kalmar and
      Gothenburg. We are so excited for this!
    </p>
    <p>
      Beers for the People are famous for their recommendations of accompanying
      foods to bring out the best taste in both the beers and food alike.
    </p>
  </div>
  <div id="mail-list">
    <h1>CONTACT US</h1>
    <p>
      Please subscribe to our mailing list to receive early access to all our
      offers!
    </p>
  </div>
  <div class="input-container">
    <div id="customer-name-input"></div>
    <input type="text" v-model="customerName" placeholder="Name" />
    <input type="text" v-model="customerEmail" placeholder="E-mail" />
    <input type="submit" value="Send" button="" />
  </div>
  <br />
  <p>
    How did you hear about us. Please choose from one of the following three
    options.
  </p>
  <span class="referral-container">
    <select v-model="pickedReferral">
      <option
        :key="referral.id"
        v-for="referral in referrals"
        v-bind:value="referral.choice"
      >
        {{ referral.choice }}
      </option>
    </select>
    <p>You chose {{ pickedReferral }} as your referral method</p>
  </span>
</template>

<script>
  export default {
    data() {
      return {
        referrals: [
          { choice: 'Friend' },
          { choice: 'Social Media' },
          { choice: 'TV Commercial' }
        ],
        pickedReferral: ''
      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
  }

  input[type='text'],
  [type='email'],
  textarea {
    width: 40%;
    padding: 12px;
    border: 2px solid gold;
    border-radius: 5px;
    box-sizing: border-box;
    resize: vertical;
    margin-bottom: 20px;
  }

  input[type='submit'] {
    background-color: gold;
    color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    width: 5%;
  }
  h1 {
    color: gold;
  }

  select {
    padding-top: 12px;
    width: 40%;
    padding: 12px;
    border: 2px solid gold;
    border-radius: 5px;
    box-sizing: border-box;
    resize: vertical;
  }
</style>
