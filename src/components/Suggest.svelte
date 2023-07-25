<script lang="ts">
  import type { User } from '../types/user';
  import { findUsers } from '../services/users';
  import { debounce } from '../utils/debounce';

  let users: User[] = [];
  let controller = new AbortController();
  let request: Promise<User[]> | null = null;

  const displayUsers = debounce(async (phrase: string) => {
    console.debug('piecioshka, displayUsers', { phrase });

    if (request) {
      controller.abort();
      controller = new AbortController();
    }

    try {
      request = findUsers(phrase, { signal: controller.signal });
      users = await request;
    } catch (err) {
      // empty
    }

    request = null;
  }, 500);

  const onChange = (evt) => {
    const phrase = evt.target.value.trim();
    console.debug('piecioshka, onChange', { phrase });

    users.length = 0;

    if (!phrase) {
      return;
    }

    displayUsers(phrase);
  };
</script>

<div class="suggest">
  <label class="suggest-label">
    🔎
    <input
      class="suggest-input"
      type="text"
      placeholder="Example 'Brandon Crona'"
      on:input={onChange}
    />
  </label>

  <ul class="suggest-list">
    {#each users as user}
      <li class="suggest-item">
        <img src={user.avatarUrl} class="user-avatar" alt="" />
        <span class="user-name">{user.name}</span>
        <em class="user-email">{user.email}</em>
      </li>
    {/each}
  </ul>
</div>

<style lang="css">
  .suggest {
    background-color: aliceblue;
    border-radius: 5px;
    padding: 10px;
  }

  .suggest-label {
    display: flex;
    margin: 10px 0;
  }

  .suggest-input {
    margin: 0 0 0 10px;
    width: 100%;
    padding: 3px 5px;
  }

  .suggest-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 5px;
    overflow: hidden;
  }

  .suggest-item {
    background-color: lightblue;
    padding: 7px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user-name {
    flex-grow: 1;
  }

  .user-email {
    font-size: small;
  }

  .user-avatar {
    width: 20px;
    height: 20px;
    margin: 0 5px 0 0;
  }
</style>
