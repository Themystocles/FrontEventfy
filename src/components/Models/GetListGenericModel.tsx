export interface GetListProps<T> {
    url: string;  // URL da requisição.
    renderItem: (item: T) => React.ReactNode;  // Função para renderizar os itens.
}