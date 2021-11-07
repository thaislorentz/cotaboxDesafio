import { computed } from "vue";
export default {
    props: {
        persons: Array,
      },
    data: function () {
        return {
            series: this.persons.length > 0 ? computed(() => this.persons.map(item => item.participation)) : [],
            chartOptions: {
                labels: this.persons.length > 0 ? computed(() => this.persons.map(item => `${item.firstName} ${item.lastName}`)) : [],
                colors: ['#2d97de', '#bdc3c7', '#9c55b8', '#e94b35', '#15ba9a'],
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 600,
                    options: {
                        chart: {
                            width: 300
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };
    },
};