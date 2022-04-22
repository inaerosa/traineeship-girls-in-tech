- Estruturar o objeto de restaurante com seus campos básicos
  - nome String
  - horário de funcionamento - string
  - localização
    - latitude - int
    - longitude - int
  - ticket médio - float
  - numero de funcionarios - int
  - região - string
  - status - boolean
  - matriz - boolean
  - notificações - array de objeto
    - data - new date
    - hora - date
    - mensagem - string

- Campos especiais
  - serviceType - array
  - categoria de items - array

- Regras de negocio
  - categorias podem ser adicionadas ao longo da execução
  - status vai ser um boolean que pode ser alterado
  - somente matriz pode enviar mensagem

- Notificações 
    - Verifica se o id passado pertence a um restaurante matriz
      - se sim
        - envia mensagem contendo data e hora para os restaurantes
        - restaurante recebe a mensagem e faz um push no array

- Rotas 
  - cadastrar restaurante (GET)
    - app.get('/', (req, res)) 