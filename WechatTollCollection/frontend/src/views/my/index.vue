<template>
    <div>
        <group class="avatar">
            <cell :title="userName" :inline-desc="'学号：' + userId">
                <img slot="icon" width="50" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
        </group>
        <group>
            <cell :title="$t('我的账号')" link="/users/my" inline-desc=''></cell>
            <cell :title="$t('我的申请')" :link="{path:'/demo'}">
                <div class="badge-value" slot="value">
                    <badge text="8"></badge>
                </div>
            </cell>
        </group>
    </div>
</template>



<script>
import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'
import { mapState, mapActions } from 'vuex'

export default {
    mounted() {
    },
    components: {
        Group,
        Cell,
        CellFormPreview,
        CellBox,
        Badge
    },
    computed: {
        ...mapState({
            userId: state => state.user.id,
            userName: state => state.user.name
        })
    },
    methods: {
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.avatar img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid #ececec;
}

.sub-item {
    color: #888;
}

.slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}

.animate {
    max-height: 9999px;
    transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
    transition-delay: 0s;
}
</style>
