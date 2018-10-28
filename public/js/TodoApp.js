'use strict';

(function (window, $) {

    class TodoApp {
        constructor(wrapper, swal) {
            this.wrapper = wrapper;
            this.items = [];
            this.helper = new Helper(this.items);

            this.wrapper.on(
                'click',
                '.btn-primary',
                this.handleNewItem.bind(this)
            );

            this.wrapper.on(
                'click',
                '.js-delete-item',
                this.handleDeleteItem.bind(this)
            );
        }

        handleDeleteItem(e) {
            e.preventDefault();
            const enlace = $(e.currentTarget);
            swal({
                title: '¿borrar este elemento?',
                text: '¿Ya no lo necesitas?',
                showCancelButton: true,
                showLoaderOnConfirm: true,
                preConfirm: () => this.borrarItem(enlace)
            });
        }

        borrarItem(enlace) {
            const fila = enlace.closest('tr');
            this.items.splice(
                fila.data('key'),
                1
            );
            fila.remove();
            this.updateTotalItems();
        }

        handleNewItem() {
            let item = {};
            item.name = $('#name').val();
            item.cantidad = parseInt($('#cantidad').val());
            this.items.push(item);
            this.helper.getTotalItems();
            this.appendItemInTable(item);
            this.updateTotalItems();
            this.cleanFields();
        }

        cleanFields() {
            $('#name').val('');
            $('#cantidad').val('1');
        }

        updateTotalItems() {
            this.wrapper.find('.js-total-items').html(this.helper.getTotalItems());
        }

        appendItemInTable(item) {
            const htmlFila = rowTemplate(item);
            const fila = $.parseHTML(htmlFila);
            this.wrapper.find('tbody').append(fila);
        }
    }

    class Helper {
        constructor(items) {
            this.items = items;
        }

        getTotalItems() {
            return this.items.reduce((sum, val) => {
                return sum + val.cantidad;
            }, 0);
        }
    }

    const rowTemplate = (item) => `
<tr>
    <td>${item.name}</td>
    <td>${item.cantidad}</td>
    <td><a href="#" class="js-delete-item"><span class="fa fa-trash"></span></a></td>
</tr>`;

    window.TodoApp = TodoApp;
})(window, jQuery, swal);
