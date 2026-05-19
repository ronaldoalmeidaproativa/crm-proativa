import { Zap, Users, FolderKanban, FileText, BarChart3, DollarSign } from 'lucide-react'

const stats = [
  { name: 'Clientes Ativos', value: '24', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
  { name: 'Projetos em Andamento', value: '18', icon: FolderKanban, color: 'text-purple-600', bg: 'bg-purple-100' },
  { name: 'Briefings Pendentes', value: '5', icon: FileText, color: 'text-yellow-600', bg: 'bg-yellow-100' },
  { name: 'Faturamento Mensal', value: 'R$ 125k', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Zap className="w-8 h-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Bem-vindo ao Sistema PROATIVA
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.bg} p-3 rounded-lg`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Atividades Recentes
            </h2>
            <div className="space-y-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Nenhuma atividade recente para exibir.
              </p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Ações Rápidas
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="btn-primary text-sm">Novo Cliente</button>
              <button className="btn-primary text-sm">Novo Projeto</button>
              <button className="btn-primary text-sm">Novo Briefing</button>
              <button className="btn-primary text-sm">Nova Tarefa</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
