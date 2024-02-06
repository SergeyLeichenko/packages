<template>
  <div class="col-lg-9 mt-4 mt-lg-0 pt-4">

    <div class="search mb-4">
      <b-form-input type="text" v-model="searchValue" placeholder="Пошук..." />
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredPackagesData.slice((page - 1) * perPage, page * perPage)" :key="item + index">
          <td>{{ item.name }}</td>
          <td>
            <b-button v-b-modal.modalDetailPackage @click="detailPackage(item)">Detail</b-button>
          </td>
        </tr>
      </tbody>
    </table>

    <b-modal id="modalDetailPackage" title="Detail Package" centered>
      <PackageDetail :detail="detailNpm" />
    </b-modal>

    <div class="btn-next-prev">
      <b-button class="btn" @click="next(-1)" :disabled="page <= 1">Prev</b-button>
      <b-button class="btn next" @click="next(+1)" :disabled="page >= numPages">Next</b-button>
    </div>

  </div>
</template>

<script>
import PackageDetail from "./PackageDetail.vue"
import { mapActions, mapGetters } from "vuex"

export default {
  component: {
    PackageDetail
  },
  data() {
    return {
      searchValue: '',
      page: 1,
      perPage: 10,
      list: 1,
      detailNpm: {}
    }
  },
  computed: {
    ...mapGetters(["PACKAGES"]),
    filteredPackagesData() {
      return this.PACKAGES.filter((info) => {
        return info.name.toLowerCase().includes(this.searchValue.toLowerCase());
      });
    },
    numPages() {
      return Math.ceil(this.PACKAGES.length / this.perPage);
    },
  },
  methods: {
    ...mapActions(["GET_PACKAGES_FROM_API"]),
    detailPackage(data) {
      this.detailNpm = data
    },
    next(change) {
      this.page = Math.max(1, Math.min(this.numPages, this.page + change));
    }
  },
  mounted() {
    this.GET_PACKAGES_FROM_API().then((response) => {
      if (response.data) {
        // console.log("PACKAGES", response);
      }
    });
  }
}
</script>

<style scoped lang="scss">
.btn-next-prev {
  display: flex;
  justify-content: center;
  padding: 10px 0;

  .btn {
    width: 100px;
  }

  .next {
    margin-left: 20px;
  }
}
</style>