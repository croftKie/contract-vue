<template>
  <AltNav />
  <JobInfoSection />
  <JobContentNav />
  <JobAboutSection />
  <JobControls />
</template>
<script>
import AltNav from "../comps/AltNav.vue";
import JobInfoSection from "../comps/JobInfoSection.vue";
import JobContentNav from "../comps/JobContentNav.vue";
import JobAboutSection from "../comps/JobAboutSection.vue";
import JobControls from "../comps/JobControls.vue";
export default {
  name: "JobView",
  components: {
    AltNav,
    JobInfoSection,
    JobContentNav,
    JobAboutSection,
    JobControls,
  },
};
</script>
